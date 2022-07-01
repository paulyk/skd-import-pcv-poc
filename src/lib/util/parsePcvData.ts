import type { PcvMetaData, RefData, PCV, PcvModel } from "src/types"

enum LineType {
    Series = 0,
    Engine,
    Transmission,
    Drive,
    Paint,
    TrimPack,
    PCV
}

interface ToRefDataFn {
    (input: string): RefData
}

export const generatePcvMetadata =  (pcvModel: PcvModel, modelYear: number,  pcvColumnData: string): PcvMetaData => {
    const lines = pcvColumnData.split('\n').filter(t => t.length > 0)

    if (lines.length === 0) {
        return {
            series: [],
            engine: [],
            transmission: [],
            drive: [],
            paint: [],
            trimPack: [],
            pcv: []
        }
    }

    const series= parseRefData(lines[LineType.Series], code_name)
    const engine = parseRefData(lines[LineType.Engine], code_code_name)
    const transmission = parseRefData(lines[LineType.Transmission], code_code_name)
    const drive = parseRefData(lines[LineType.Drive], code_code_name)
    const paint= parseRefData(lines[LineType.Paint], code_name)
    const trimPack= parseRefData(lines[LineType.TrimPack], code_name_name)
    const pcvSet = parseRefData(lines[LineType.PCV], code_name) 

    const pcvs: PCV[] =  pcvSet.map(v => v.name).map((code, i) =>({
        pcvCode: code,
        seriesCode: series[i].code,
        encineCode: engine[i].code,
        transmissionCode: transmission[i].code,
        driveCode: drive[i].code,
        paintCode: paint[i].code,
        trimPackCode: trimPack[i].code,
    }))

    return {
        series: series.filter(distinctCode),
        engine: engine.filter(distinctCode),
        transmission: transmission.filter(distinctCode),
        drive: drive.filter(distinctCode),
        paint: paint.filter(distinctCode),
        trimPack: trimPack.filter(distinctCode),
        pcv: pcvs.map(x => ({ ...x, model: pcvModel, modelYear }))
    }
}

function parseRefData(line: string, mapFn: ToRefDataFn): RefData[] {
    return distinctEntries(line).map(mapFn)
}

function distinctEntries(line: string): string[] {
    return line
        .split('\t')
}

function code_name(v: string) {
    let [code, name] = v.split('-').map(v => v.trim())
    return { code, name }
}

function code_code_name(v: string) {
    let [code_1, code_2, name] = v.split('-').map(v => v.trim())
    return { code: `${code_1}-${code_2}`, name }
}

function code_name_name(v: string) {
    let [code, name_1, name_2] = v.split('-').map(v => v.trim())
    let name= [name_1, name_2 || ''].filter(v => v.length > 0 ).join('-')
    return { code, name }
}

function distinctCode(v: RefData, i: number, self: RefData[]) { return  self.findIndex(u => u.code === v.code) === i }

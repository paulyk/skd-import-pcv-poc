import type { PcvMetaData, RefData } from "src/types"

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

export const parseRawPcvData = (text: string): PcvMetaData => {
    const lines = text.split('\n').filter(t => t.length > 0)

    if (lines.length === 0) {
        return {
            series: [],
            engines: [],
            transmissions: [],
            drives: [],
            paint: [],
            trimPack: [],
            pcv: []
        }
    }

    return {
        series: parseRefData(lines[LineType.Series], code_dash_name),
        engines: parseRefData(lines[LineType.Engine], code_code_name),
        transmissions: parseRefData(lines[LineType.Transmission], code_code_name),
        drives: parseRefData(lines[LineType.Drive], code_code_name),
        paint: parseRefData(lines[LineType.Paint], code_dash_name),
        trimPack: parseRefData(lines[LineType.TrimPack], code_name_name),
        pcv: parseRefData(lines[LineType.PCV], code_dash_name),
    }
}

function parseRefData(line: string, mapFn: ToRefDataFn): RefData[] {
    return distinctEntries(line).map(mapFn)
}

function distinctEntries(line: string): string[] {
    return line
        .split('\t')
        .filter((v, i, _self) => _self.indexOf(v) === i)
}

function code_dash_name(v: string) {
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

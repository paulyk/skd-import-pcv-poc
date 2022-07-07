
export interface CodeName {
    code: string
    name: string
}

export type PcvModel = 'Ranger' | 'Evereset'

export interface PCV {
    pcvCode: string
    seriesCode: string
    encineCode: string
    transmissionCode: string
    driveCode: string
    paintCode: string
    trimPackCode: string

    model?: PcvModel
    body: String
    modelYear?: number
}
export interface PcvMetaData {
    series: CodeName[]
    engine: CodeName[]
    transmission: CodeName[],
    drive: CodeName[],
    paint: CodeName[],
    trimPack: CodeName[],
    pcv: PCV[]
}


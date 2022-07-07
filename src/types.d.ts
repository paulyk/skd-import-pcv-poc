
export interface CodeName {
    code: string
    name: string
}

export type PcvModel = 'Ranger' | 'Evereset'

export interface PCV {
    pcvCode: string
    series: CodeName
    engine: CodeName
    transmission: CodeName
    drive: CodeName
    paint: CodeName
    trimPack: CodeName
    model?: string
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
    pcvs: PCV[]
}


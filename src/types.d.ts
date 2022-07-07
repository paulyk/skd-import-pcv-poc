
export interface CodeName {
    code: string
    name: string
}

export type PcvModel = 'Ranger' | 'Evereset'

export interface PCV {
    pcvCode: string
    series: string
    engine: string
    transmission: string
    drive: string
    paint: string
    trimPack: string
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


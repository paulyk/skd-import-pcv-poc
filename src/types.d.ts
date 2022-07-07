
export interface CodeName {
    code: string
    name: string
}

export type PcvModel = 'Ranger,P703' | 'Evereset,U704'

export interface PCV {
    pcvCode: string
    series: CodeName
    engine: CodeName
    transmission: CodeName
    drive: CodeName
    paint: CodeName
    trimPack: CodeName
    model?: string
    subModel?: string
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


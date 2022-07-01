
export interface RefData {
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
    modelYear?: number
}
export interface PcvMetaData {
    series: RefData[]
    engine: RefData[]
    transmission: RefData[],
    drive: RefData[],
    paint: RefData[],
    trimPack: RefData[],
    pcv: PCV[]
}


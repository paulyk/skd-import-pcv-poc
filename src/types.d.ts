

export interface RefData {
    code: string
    name: string
}

export interface PcvMetaData {
    series: RefData[]
    engines: RefData[]
    transmissions: RefData[],
    drives: RefData[],
    paint: RefData[],
    trimPack: RefData[]
    pcv: RefData[]
}
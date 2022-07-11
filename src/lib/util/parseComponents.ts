import type { CodeName } from "src/types"

export const parseComponents = (text: string): CodeName[] => {
    const lines = (text || "").trim().split('\n').map(t => t.trim()).filter(l => l.length > 0)
    if (lines.length === 0) {
        return []
    }
    let result: CodeName[] = lines.map(l => {
        let [code, name] = l.split('\t')
        name = capitalize(name)
        return { code, name }
    })

    return result
}

function capitalize(text: string) {
    const words = text.split(/\s+/g).filter(x => x.trim().length > 0)
    return words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')
}


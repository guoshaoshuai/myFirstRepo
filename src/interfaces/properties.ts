export interface SquareConfig {
    width?: number,
    color?: string,
    [prop: string]: any
}

export function createSquare(config: SquareConfig): { color: string; area: number } {
    const newSquare = {color: "white", area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

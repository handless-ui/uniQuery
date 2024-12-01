import type CanvasType from "vislite/types/Canvas";

export function drawXAxis(painter: CanvasType, axis: any, endY: number) {
    painter.config({
        fillStyle: "#000000",
        strokeStyle: "#aeaeae",
        fontSize: 12
    });

    for (let i = 0; i < axis.texts.length; i++) {
        let text = axis.texts[i]
        painter.config({
            textAlign: "center",
            textBaseline: "top"
        }).fillText(text.content, text.x, text.y + 10);
    }

    if (endY == -1) {
        painter.beginPath()
            .moveTo(axis.begin.x, axis.begin.y)
            .lineTo(axis.end.x, axis.end.y)
            .stroke()

        for (let i = 0; i < axis.masks.length; i++) {
            let mask = axis.masks[i]
            painter.beginPath().moveTo(mask.x, mask.y).lineTo(mask.x, mask.y + 5).stroke()
        }
    } else {
        for (let i = 1; i < axis.masks.length; i++) {
            let mask = axis.masks[i]
            painter.beginPath().moveTo(mask.x, mask.y).lineTo(mask.x, endY).stroke()
        }
    }
}

export function drawYAxis(painter: CanvasType, axis: any, endX: number) {

    painter.config({
        fillStyle: "#000000",
        strokeStyle: "#aeaeae",
        fontSize: 12
    })

    for (let i = 0; i < axis.texts.length; i++) {
        let text = axis.texts[i]
        painter.config({
            textAlign: "right",
            textBaseline: "middle"
        }).fillText(text.content, text.x - 10, text.y)
    }

    if (endX == -1) {
        painter.beginPath()
            .moveTo(axis.begin.x, axis.begin.y)
            .lineTo(axis.end.x, axis.end.y)
            .stroke()

        for (let i = 0; i < axis.masks.length; i++) {
            let mask = axis.masks[i]
            painter.beginPath().moveTo(mask.x, mask.y).lineTo(mask.x - 5, mask.y).stroke()
        }
    } else {
        for (let i = 1; i < axis.masks.length; i++) {
            let mask = axis.masks[i]
            painter.beginPath().moveTo(mask.x, mask.y).lineTo(endX, mask.y).stroke()
        }
    }
}
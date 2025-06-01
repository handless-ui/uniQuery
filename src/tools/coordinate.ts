import type CanvasType from "vislite/types/Canvas";
import type { BarResultType } from "vislite/types/Bar";

export default function (painter: CanvasType, coordinate: BarResultType['coordinate']) {

    // 绘制x刻度尺
    if (coordinate.xAxis.type === "category") {
        let distLen = coordinate.width / coordinate.xAxis.data.length;

        painter.config({
            strokeStyle: "black",
            fillStyle: "black"
        });

        // 绘制小刻度
        for (let i = 0; i <= coordinate.xAxis.data.length; i++) {
            let x = i * distLen + coordinate.x;
            painter.beginPath().moveTo(x, coordinate.y).lineTo(x, coordinate.y + 5).stroke();
        }

        // 绘制刻度值
        painter.config({
            textBaseline: "top",
            textAlign: "center",
            fontSize: 10
        })
        for (let i = 0; i < coordinate.xAxis.data.length; i++) {
            painter.fillText(coordinate.xAxis.data[i], (i + 0.5) * distLen + coordinate.x, coordinate.y + 7);
        }

    } else {
        let distLen = coordinate.width / (coordinate.xAxis.data.length - 1);

        painter.config({
            strokeStyle: "#aaa",
            fillStyle: "black",
            textAlign: "center",
            textBaseline: "top",
            fontSize: 10
        })
        for (let i = 0; i < coordinate.xAxis.data.length; i++) {
            let x = coordinate.x + i * distLen;

            // 长刻度
            painter.beginPath().moveTo(x, coordinate.y).lineTo(x, coordinate.y - coordinate.height).stroke();

            // 刻度值
            painter.fillText(coordinate.xAxis.data[i], x, coordinate.y + 4);
        }
    }

    // 绘制y刻度尺
    if (coordinate.yAxis.type === "category") {
        let distLen = coordinate.height / coordinate.yAxis.data.length;

        painter.config({
            strokeStyle: "black",
            fillStyle: "black"
        });

        // 绘制小刻度
        for (let i = 0; i <= coordinate.yAxis.data.length; i++) {
            let y = i * distLen + coordinate.y - coordinate.height;
            painter.beginPath().moveTo(coordinate.x, y).lineTo(coordinate.x - 5, y).stroke();
        }

        // 绘制刻度值
        painter.config({
            textBaseline: "middle",
            textAlign: "right",
            fontSize: 10
        })
        for (let i = 0; i < coordinate.yAxis.data.length; i++) {
            painter.fillText(coordinate.yAxis.data[i], coordinate.x - 7, (i + 0.5) * distLen + coordinate.y - coordinate.height);
        }

    } else {
        let distLen = coordinate.height / (coordinate.yAxis.data.length - 1);

        painter.config({
            strokeStyle: "#aaa",
            fillStyle: "black",
            textAlign: "right",
            textBaseline: "middle",
            fontSize: 10
        })
        for (let i = 0; i < coordinate.yAxis.data.length; i++) {
            let y = coordinate.y - i * distLen;

            // 长刻度
            painter.beginPath().moveTo(coordinate.x, y).lineTo(coordinate.x + coordinate.width, y).stroke();

            // 刻度值
            painter.fillText(coordinate.yAxis.data[i], coordinate.x - 3, y);
        }
    }
}
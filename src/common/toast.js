/*
 * @Author: sheng.zeng 1218128305@qq.com
 * @Date: 2024-03-20 10:19:17
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-01-18 14:30:02
 */
import app from "@/app";
const getToast = () => app.config.globalProperties.$toast;
const toast = {
    add(param) {
        getToast().add(param);
    },
};
export default toast;

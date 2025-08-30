<!--
 * @Author: zengsheng 12181283
 * @Date: 2025-02-05 14:59:37
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-08-28 18:22:39
 * @FilePath: \fmt-web\src\views\auth\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="bg">
        <!-- <FloatingConfigurator /> -->

        <div class="gradient-bg flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex w-full flex-col items-center justify-center">
                <div class="w-full sm:w-[400px] bg-surface-0 dark:bg-surface-900 py-10 px-10" style="border-radius: 10px">
                        <slot></slot>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.bg {
    background-image: url(./123.jpg);
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;

    .gradient-bg {
        background: radial-gradient(black, transparent);
    }
}
</style>

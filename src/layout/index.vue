<template>
  <el-container ref="appWrapperRef" class="h-full">
    <AppMask />
    <Asider />
    <el-container direction="vertical" class="relative">
      <Header />
      <NavTab />
      <Main />
      <AppSetting />
    </el-container>
  </el-container>
</template>

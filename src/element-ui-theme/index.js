/**
 * element-ui组件主题
 *
 * tips:
 *  1. 此处只包含element-ui组件主题
 *  2. 要达到整站主题修改效果, 请确保[active]当前主题色与[/src/assets/scss/_variables.scss]文件中[$--color-primary]属性值一致
 */
const theme = {
  active: '#17b3a3', // 当前主题色
  list: [
    '#0bb2d4', // 青色
    '#3e8ef7', // 蓝色
    '#11c26d', // 绿色
    '#17b3a3', // 蓝绿色
    '#667afa', // 靛青色
    '#997b71', // 棕色
    '#9463f7', // 紫色
    '#757575', // 灰色
    '#eb6709', // 橙色
    '#f74584', // 粉红色
    '#fcb900', // 黄色
    '#ff4c52'  // 红色
  ]
}
require(`./element-${theme.active.toUpperCase()}/index.css`)

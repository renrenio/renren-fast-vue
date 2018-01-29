/**
 * 字体图标, 统一使用阿里矢量图标(http://www.iconfont.cn/）
 *
 * 使用:
 *  1. 在阿里矢量图标站创建一个项目, 并添加图标
 *  2. 下载图标库对应[iconfont.js]文件, 替换项目[./iconfont.js]文件
 *  3. 组件模版中使用[<icon-svg name="canyin"></icon-svg>]
 */
import Vue from 'vue'
import IconSvg from '@/components/icon-svg'
import './iconfont.js'

Vue.component('IconSvg', IconSvg)


/**
  * 内核判断
  *
  */
const deviceCore = {
  _ua: navigator.userAgent.toLowerCase(),
  // 获取浏览器版本
  _getVersion: (nece) => {
    let arr = nece.split('.')
    return parseFloat(`${arr[ 0 ]}.${arr[ 1 ]}`)
  },
  // 设备检测
  _detect: (kernel) => {
    let reg = new RegExp(kernel, 'img')
    return reg.test(deviceCore._ua)
  }
}
export const device = {
  isIOS: () => { return deviceCore._detect('iPhone|iPad|iPod|iOS|mac os') },
  isAndroid: () => { return deviceCore._detect('Android') },
  isUCBrowser: () => { return deviceCore._detect('UCBrowser') },
  isQQBrowser: () => { return deviceCore._detect('QQBrowser') },
  isWeixin: () => { return deviceCore._detect('MicroMessenger') },
  isPC: () => { return !deviceCore._detect('phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone') },
  qqBrowserVersion: () => { return device.isQQBrowser() ? deviceCore._getVersion(deviceCore._ua.split('mqqbrowser/')[ 1 ]) : 0 },
  ucBrowserVersion: () => { return device.isUCBrowser() ? deviceCore._getVersion(deviceCore._ua.split('ucbrowser/')[ 1 ]) : 0 },
  iOSVersion: () => { return device.isIOS() ? parseInt(deviceCore._ua.match(/\s*os\s*\d+/gi)[ 0 ].split(' ')[ 2 ], 10) : 0 }
}

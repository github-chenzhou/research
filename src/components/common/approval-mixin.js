/*
 * module 审核各模块
 * @author: chenzhou
 * @update: 2018.12.15
 * @desc 审核功能汇总
 *
 */


let approvalMixin = {
  methods: {
    /*
     * @method 根据模块格式化数据
     * @param
     */
    setModule(moduleID, content) {
      if(moduleID) {
        switch (moduleID) {
          // 获奖
          case 'honor':
            // statements_1
            break;
          // 专利
          case 'patent':
            let agencyInfo = JSON.parse(content.agencyInfo);
            let patentFeeInfo = JSON.parse(content.patentFeeInfo);
            patentFeeInfo && Object.assign(this.project.baseInfo, agencyInfo, patentFeeInfoååååå);

            break;
          default:
            // statements_def
            break;
        }

      }
    },

    /*
     * @method 带动画的划线
     * @param context画板上下文 drawInfo
     */


  }
}


export default approvalMixin;

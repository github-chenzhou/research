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
            let pctInfo = JSON.parse(content.pctInfo);
            patentFeeInfo && Object.assign(this.project.baseInfo, agencyInfo, patentFeeInfo, pctInfo);

            break;
          // 专利申请
          case 'patentApplyBook':
            // 专利权人信息
            let patenteeInfo = content.patenteeInfo
            if(patenteeInfo) {
              this.project.patenteeInfo = patenteeInfo;
            }

            break;
          // 技术开发/技术转让合同模块
          case 'developmentTransfer':
            // 甲方
            let jfInfo = JSON.parse(content.jfInfo);
            // 乙方
            let yfInfo = JSON.parse(content.yfInfo);

            if(jfInfo && yfInfo) {
              let contract = Object.assign({}, jfInfo, yfInfo);
              this.project.contract = this.clearNull(contract);
            }

            // 附件
            let fileInfo = JSON.parse(content.fileInfo);
            this.attachments = this.formatFiles(fileInfo);

            break;
          // 横向项目模块
          case 'yfContract':
          // 纵向项目模块
          case 'zXProject':
          // 集团项目模块
          case 'jTProject':
          // 总院课题模块
          case 'xJProject':
            // 预算明细
            if(content.budgetInfo) {
              this.project.budgetInfo = content.budgetInfo;
            }

            // 合作单位
            if(content.cooperationUnitInfo) {
              this.project.cooperationUnitInfo = content.cooperationUnitInfo;
            }

            if(content.cooperationUnitOuterInfo) {
              this.project.cooperationUnitOuterInfo = content.cooperationUnitOuterInfo;
            }

            if(content.yearBudgetsInfo) {
              this.project.yearBudgetsInfo = content.yearBudgetsInfo;
            }

            // 年度计划
            if(content.yearProgressInfo) {
              this.project.yearProgressInfo = content.yearProgressInfo;
            }

            break;
          // 标准项目发布模块
          case 'releaseDeclare':
            // 编制单位信息
            if(content.lxDeclareProjectUnitInfo) {
              this.project.lxDeclareProjectUnitInfo = content.lxDeclareProjectUnitInfo;
            }

            break;
          default:
            // statements_def
            break;
        }

      }
    },

    /*
     * @method 清理结构中的脏数据
     * @param info
     */
    formatFiles(fileInfo) {
      // attachments: [{ name: '立项批准文件或主管部门任务书、合同书', url: '', size: '' }]
      let attachments = [];
      for(let key in fileInfo){
        attachments.push({ name: key, url: fileInfo[key] });
      }

      return attachments;
    },

    /*
     * @method 清理结构中的脏数据
     * @param info
     */
    clearNull(info) {
      for(let key in info){
        if(info[key] === 'null') {
          info[key] = '';
        }
      }

      return info;
    }

  }
}


export default approvalMixin;

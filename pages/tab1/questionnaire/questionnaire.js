Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        current:0,
        answers:[],
        disable:true,
        question:[
            {
                "id": "1", "que": "请选择您的眩晕属于哪种类型？", "show":'', "flag": "check",
                "anwser": [
                    { "name": "A", "value": "头昏昏沉沉" },
                    { "name": "B", "value": "天旋地转" },
                    { "name": "C", "value": "不稳感" },
                    { "name": "D", "value": "视物模糊/晃动" },
                    { "name": "E", "value": "眼前发黑、似要跌倒" },
                ]
            },
            {
                "id": "2", "que": "您是否首次出现眩晕？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "首次（第一次晕）" },
                    { "name": "B", "value": "曾经发作过（反复发作）", },
                ]
            },
            {
                "id": '3', "que": '首次眩晕距现在的时间？', "show": '', "flag": 'radio', 
                "anwser": [
                    { "name": 'A', "value": '数天' },
                    { "name": 'B', "value": '数月' },
                    { "name": 'C', "value": '数年' },
                ]
            },
            {
                "id": "4", "que": "眩晕出现频率？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "每天1~数次" },
                    { "name": "B", "value": "每周1~数次" },
                    { "name": "C", "value": "每月1~数次" },
                    { "name": "D", "value": "每年1~数次" },
                    { "name": "E", "value": "数年1次" },
                    { "name": "F", "value": "一直存在" },
                ]
            },
            {
                "id": "5", "que": "您每次眩晕持续的时间？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "数秒(5分钟以内)" },
                    { "name": "B", "value": "数分钟(20分钟以内)", },
                    { "name": "C", "value": "数小时（30分钟-数小时）" },
                    { "name": "D", "value": "数天" },
                    { "name": "E", "value": "数周" },
                    { "name": "F", "value": "持续存在" },
                ]
            },
            {
                "id": "6", "que": "您的眩晕感是否与体位有关？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": " 起床、翻身、躺下时" },
                    { "name": "B", "value": "直立时"},
                    { "name": "C", "value": "转头时" },
                    { "name": "D", "value": "与体位或头位无关" },
                    { "name": "E", "value": "转身、屈体、行车、挖耳、洗耳、擤鼻" },
                ]
            },
            {
                "id": "7", "que": "当您出现眩晕时／之前／之后是否伴随听力下降？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "7-1", "que": "听力下降的过程？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "缓慢下降" },
                    { "name": "B", "value": "突然下降" },
                ]
            },
            {
                "id": "7-2", "que": "听力下降的程度？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "轻度（稍微听音不清）" },
                    { "name": "B", "value": "中度（听力明显下降，别人说话容易打岔）", },
                    { "name": "C", "value": "重度（几乎听不到）" },
                ]
            },
            {
                "id": "7-3", "que": "听力下降耳的侧别？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "单耳" },
                    { "name": "B", "value": "双耳" },
                ]
            },
            {
                "id": "8", "que": "当您出现眩晕时是否伴随耳鸣？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "9", "que": "是否伴随耳朵闷堵、闷胀感？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "10", "que": "当您出现眩晕时是否伴随头痛？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "10-1", "que": "头痛程度？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "轻度（安静休息后可缓解）" },
                    { "name": "B", "value": "中度（可忍受，但不能正常活动工作）", },
                    { "name": "C", "value": "重度（难以忍受，如想拿头撞墙缓解，需服用止痛药控制）" },
                ]
            },
            {
                "id": "10-2", "que": "头痛类型？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "跳痛、搏动性" },
                    { "name": "B", "value": "钝痛、压榨痛、刺痛", },
                    { "name": "C", "value": "描述不清" },
                ]
            },
            {
                "id": "10-3", "que": "头痛部位？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "偏头部一侧或两侧，位置局限" },
                    { "name": "B", "value": "整个头弥漫性疼，描述不清" }
                ]
            },
            {
                "id": "11", "que": "当您出现眩晕时是否伴随怕强光或强声？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "12", "que": "当您出现眩晕时是否伴随眼前出现闪光点、亮点（红、黄、蓝、黑等）、或者视物变形？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "13", "que": "当您出现眩晕时是否伴随晕车？", "show": "",
                "anwser": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "14", "que": "您是否有家族病史或者类似表现？", "show": "", "flag": "radio",
                "anwser": [
                    { "name": "A", "value": "有" },
                    { "name": "B", "value": "无", }
                ]
            },
            {
                "id": "15", "que": "请选择您出现眩晕时／之前／之后伴随的症状？", "show": "", "flag": "check",
                "anwser": [
                    { "name": "A", "value": "意识丧失、跌倒" },
                    { "name": "B", "value": "偏盲（一侧视野缺损）", },
                    { "name": "C", "value": "面部、手部发麻" },
                    { "name": "D", "value": "胳膊、腿肌力减退" },
                    { "name": "E", "value": "说话困难" },
                    { "name": "F", "value": "喝水咳呛" },
                    { "name": "G", "value": "吞咽困难" },
                    { "name": "H", "value": "恶心呕吐、出冷汗、面色苍白、心悸" },
                    { "name": "I", "value": "耳流脓" },
                    { "name": "J", "value": "耳痛" },
                    { "name": "K", "value": "耳周、口周水泡、口干／味觉丧失" },
                    { "name": "L", "value": "面瘫 " },
                    { "name": "M", "value": "面部肌肉痉挛、抽搐" },
                    { "name": "N", "value": "对较小的声音敏感（如可听到自己的心跳声或踝关节活动的声音等） " },
                    { "name": "O", "value": "无 " },
                ]
            },
            {
                "id": "16", "que": "请选择诱发您眩晕的因素？", "show": "", "flag": "check",
                "anwser": [
                    { "name": "A", "value": "受凉感冒" },
                    { "name": "B", "value": "行走或运动时加重", "checked": "true" },
                    { "name": "C", "value": "咳嗽、气压或声音强度变化（按压耳屏、强声刺激后）" },
                    { "name": "D", "value": "特定场合（超市、大街上）" },
                    { "name": "E", "value": "月经期加重" },
                    { "name": "F", "value": "饮酒后加重" },
                    { "name": "G", "value": "休息欠佳、劳累后" },
                    { "name": "H", "value": "情绪焦虑、生气后" },
                    { "name": "I", "value": "走夜路时" },
                    { "name": "J", "value": "无" },

                ],
            },
            {
                id: '17', que: '请选择您的既往病史？', show: '', flag: 'check', anwser: [
                    { name: 'A', value: '手术史' },
                    { name: 'B', value: '中耳炎', checked: 'true' },
                    { name: 'C', value: '高血压' },
                    { name: 'D', value: '心脏病' },
                    { name: 'E', value: '甲亢' },
                    { name: 'F', value: '颈部外伤' },
                    { name: 'G', value: '脑血管意外' },
                    { name: 'H', value: '头部/耳部碰撞' },
                    { name: 'I', value: '糖尿病' },
                    { name: 'J', value: '精神疾病' },
                    { name: 'K', value: '其他' },
                    { name: 'L', value: '无' },

                ]
            },
            {
                id: '18', que: '请选择您的生活习惯及嗜好？', show: '', flag: 'check', anwser: [
                    { name: 'A', value: '喝茶' },
                    { name: 'B', value: '喝咖啡', checked: 'true' },
                    { name: 'C', value: '喝酒' },
                    { name: 'D', value: '抽烟' },
                    { name: 'E', value: '熬夜' },
                    { name: 'F', value: '饭菜口味重，吃的比较咸' },
                    { name: 'G', value:'无'}
                ]
            },
            {
                id: '19', que: '请选择您的服药史或正在服用的药物？', show: '', flag: 'check', anwser: [
                    { name: 'A', value: '降压药' },
                    { name: 'B', value: '升压药' },
                    { name: 'C', value: '镇静剂' },
                    { name: 'D', value: '安眠药' },
                    { name: 'E', value: '精神稳定剂' },
                    { name: 'F', value: '抗癫痫药' },
                    { name: 'G', value: '无' },
                ]
            }
        ],
    },
    commit: function (e) {
        var that = this;
        wx.showModal({
            title: '确定提交？',
            content: '',
            success: function (res) {

                if (res.confirm) {
                    wx.showModal({
                        title: '预判结果',
                        content: '不符合预定义病症',
                        showCancel:false,
                        success:function(res){
                            wx.switchTab({
                                url: '../index/index',
                            })
                        }
                    })
                    // wx.showToast({
                    //     title: '成功',
                    //     duration: 2000,
                    //     complete: function () {
                    //         console.log("提交成功，返回");
                    //         // wx.switchTab({
                    //         //     url: '../index/index',
                    //         // })
                            
                    //     }
                    // })

                }
            },


        })
        // wx.request({
        //     url: 'http://localhost:8080/FirstTset/find?method=select',
        //     success:function(res){
        //         console.log(res)
        //         wx.showModal({
        //             title: '确定提交？',
        //             content: '',
        //             success:function(res){
        //                 if(res.confirm){
        //                     wx.showToast({
        //                         title: '成功',
        //                         duration:2000,
        //                         complete:function(){
        //                             console.log("提交成功，返回");
        //                             wx.switchTab({
        //                                 url: '../index/index',
        //                             })
        //                         }
        //                     })
                            
        //                 }                    
        //             },
                    

        //         })
        //     },
        //     fail:function(res){
        //         console.log(res);
        //         console.log("提交失败");
        //     }
        // })
    },
    radioChange: function (e) {
        console.log(e)
        console.log(e.detail)

        console.log('radio发生change事件，携带value值为：', e.detail.value)
        if (e.detail.value != 'USA') {
            this.setData({
                display1: ' ',
                display2:'none',
                show:' ',
                count01: '1.1'
            })
        } 
    },

    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        console.log(that.data.question)
        // for (i=0;i<22;i++){
        //     this.setData({
        //         'questions[i].show':shows[i]
        //     })
        // }
        // wx.request({
        //     url: 'http://localhost:8080/FirstTset/JS/jsondata.json', //仅为示例，并非真实的接口地址
           
        //     // dataType:"json",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     success: function (res) { 
        //         console.log(res.data)
        //         // var result = JSON.parse(res.data)               
        //         that.setData({
        //             question: res.data
        //         })
        //         // console.log(res)
        //         console.log(that.data.question)
        //         // console.log(that.data.question)
        //     },

        //     fail: function (res) {
        //         console.log("失败")
        //     }
        // })
    },

    select:function(){
        console.log('点击成功了')
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
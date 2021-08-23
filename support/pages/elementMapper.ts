/*
    * The selector IDs are created here as
    * an interface including the url
*/

interface ElementMapper {
    home: string;
    closePopup: string;
    inputForms: string;
    checkboxDemo: string;
    checkboxSingle: string;
    checkboxOne: string;
    checkboxTwo: string;
    checkboxThree: string;
    checkboxFour: string;
    checkAllBtn: string;
    check: string;
    uncheck: string;
    successCheckMessage: string;
    successCheck: string;
    listBox: string;
    jqListBox: string;
    resultBox: string;
    dataBox: string;
    addButton: string;
    addAllButton: string;
    removeButton: string;
    removeAllButton: string;
    cancelText: string;
    okText: string;
    alertModals: string;
    jsAlerts: string;
    jsAlertBox: string;
    jsConfirmBox: string;
    jsPromptBox: string;
    confirmDemo: string;
    promptDemo: string;
    sampleName: string;
    manuela: string;
    isabella: string;
    giovanna: string;
    luiza: string;
    valentina: string;
    sophia: string;


}
// @ts-ignore
const  ElementMapper: ElementMapper ={
    home: "https://www.seleniumeasy.com/test/",
// The possible appearance of a popup
//     popup: "at-cv-lightbox-win",
    closePopup:"#at-cv-lightbox-close",

// Elements for the input forms
    inputForms: "ul#treemenu>li>ul>li:nth-of-type(1)",
    checkboxDemo: "ul#treemenu>li>ul>li:nth-of-type(1)>ul>li:nth-of-type(2)>a",
    checkboxSingle: ".panel-body>.checkbox:nth-child(2)>label",
    checkboxOne:".panel-body>.checkbox:nth-child(3)>label",
    checkboxTwo: ".panel-body>.checkbox:nth-child(4)>label",
    checkboxThree: ".panel-body>.checkbox:nth-child(5)>label",
    checkboxFour: ".panel-body>.checkbox:nth-child(6)>label",
    checkAllBtn: "#check1",
    successCheck: "#txtAge",
    successCheckMessage: "Success - Check box is checked",
    uncheck: "Uncheck All",
    check: "Check All",

// Elements for the alerts & modals
    alertModals: "ul#treemenu>li>ul>li:nth-of-type(5)",
    jsAlerts: "ul#treemenu>li>ul>li:nth-of-type(5)>ul>li:nth-of-type(5)>a",
    jsAlertBox: ".panel-body>button[onclick='myAlertFunction()']",
    jsConfirmBox: ".panel-body>button[onclick='myConfirmFunction()']",
    jsPromptBox: ".panel-body>button[onclick='myPromptFunction()']",
    confirmDemo: "#confirm-demo",
    promptDemo: "#prompt-demo",
    sampleName: "Bhadmus",
    okText: "OK",
    cancelText: "Cancel",

// Elements for the list box
    listBox: "ul#treemenu>li>ul>li:nth-of-type(6)",
    jqListBox: "ul#treemenu>li>ul>li:nth-of-type(6)>ul>li:nth-of-type(2)>a",
    addButton: ".pAdd.btn.btn-primary.btn-sm",
    addAllButton: ".pAddAll.btn.btn-primary.btn-sm",
    removeButton: ".pRemove.btn.btn-primary.btn-sm",
    removeAllButton: ".pRemoveAll.btn.btn-primary.btn-sm",
    dataBox: ".form-control.pickData.pickListSelect",
    resultBox: ".form-control.pickListResult.pickListSelect",
    giovanna: "Giovanna",
    luiza: "Luiza",
    valentina: "Valentina",
    sophia: "Sophia",
    isabella: "Isabella",
    manuela: "Manuela"

}
export {ElementMapper}
define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'card/index',
                    add_url: 'card/add',
                    edit_url: 'card/edit',
                    del_url: 'card/del',
                    multi_url: 'card/multi',
                    table: 'card',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id'),operate:false},
                        {field: 'name', title: __('Name'),operate:"LIKE"},
                        {field: 'sex', title: __('Sex'),searchList:{0:'男',1:'女'}},
                        {field: 'nation', title: __('Nation')},
                        {field: 'born', title: __('Born')},
                        {field: 'address', title: __('Address')},
                        {field: 'card_no', title: __('Card_no')},
                        {field: 'user_lifeb', title: __('User_lifeb')},
                        {field: 'user_lifee', title: __('User_lifee')},
                        {field: 'police', title: __('Police')},
                        {field: 'photo', title: __('Photo')},
                        {field: 'front_img', title: __('Front_img')},
                        {field: 'back_img', title: __('Back_img')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
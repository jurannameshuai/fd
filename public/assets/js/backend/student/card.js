define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'student/card/index',
                    add_url: 'student/card/add',
                    edit_url: 'student/card/edit',
                    del_url: 'student/card/del',
                    multi_url: 'student/card/multi',
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
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'sex', title: __('Sex')},
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
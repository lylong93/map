<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column  label="地址">
        <template slot-scope="{row}">
          <span v-for="i in row.arrs" :key="i">
          {{i}}
          </span> 
        </template>
      </el-table-column>
      <el-table-column label="事件">
        <template slot-scope="{row}">
          <span v-if="row.edit">{{row.thing}}</span>
          <el-input v-else v-model="row.thing" class="edit-input" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="编辑">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" @click="editClick(scope.row)">编辑</el-button>
          <el-button v-else @click="finsh(scope.row)" type="success">完成</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="test">test</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          arrs:['p','e','t','d'],
          thing: "ddddddddddddddddddddddddd",
          edit: true
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          thing: "sddfsfdfdsfdfewerrrrrrrrrre",
          edit: true
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          thing: "csdfsdfeeeeeeeeeeeeeeeeeeeeee",
          edit: true
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          thing: "sdfddfeertttttttttttttttp",
          edit: true
        }
      ],
    };
  },
  methods: {
    editClick(row) {
      console.log(row);
      row.edit = false;
    },
    finsh(row) {
      row.edit = true;
    },
    test() {
      this.tableData[0].arrs.splice(0,1,'ddd')
      console.log( this.tableData[0])
    }
  }
};
</script>
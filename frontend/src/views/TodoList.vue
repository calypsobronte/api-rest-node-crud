<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="py-2" width="700" elevation="18" color="primary">
        <!-- List -->
        <v-card-title class="text-center d-flex flex-column">
          <h3 class="text-h3 py-3 white--text">Lista de tareas</h3>

          <v-row no-gutters>
            <!-- columnas filtradoras todos-->
            <v-col class="px-1">
              <v-btn tile color="secondary" class="text-capitalize">
                <v-icon left>
                  mdi-view-list
                </v-icon>
                Todos
              </v-btn>
            </v-col>
            <!-- columnas filtradoras tareas-->
            <v-col class="px-1">
              <v-btn tile color="secondary" class="text-capitalize">
                <v-icon left color="error">
                  mdi-window-close
                </v-icon>
                Tareas
              </v-btn>
            </v-col>
            <!-- columnas filtradoras completas-->
            <v-col class="px-1">
              <v-btn tile color="secondary" class="text-capitalize">
                <v-icon left color="success">
                  mdi-check
                </v-icon>
                Completas
              </v-btn>
            </v-col>
          </v-row>

        </v-card-title>

	<!-- data -->
        <v-card-text class="px-0">
          <v-data-table :items="apiTodoList" hide-default-footer dense>
            <template v-slot:item="{item}">
              <tr>
                <td>
                  <v-checkbox v-model="item.isComplete" @click="changeTodoList(item)"></v-checkbox>
                </td>
                <td>
                  <div v-if="item.isComplete" class="text-decoration-line-through">
                    {{ item.name }}
                  </div>
                  <div v-else>
                    {{ item.name }}
                  </div>
                </td>
                <td>
                  <v-icon @click="deleteTodoList(item._id)" color="error">mdi-delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>

          <!-- new task  -->
          <v-row>
            <v-col sm="8" class="py-0 pr-0">
              <v-text-field label="Agregar Tarea" solo dense></v-text-field>
            </v-col>

            <v-col sm="4" class="py-0 pl-0 mb-1">
              <v-btn tile color="secondary" block class="text-capitalize">
                <v-icon left>
                  mdi-plus
                </v-icon>
                Agregar
              </v-btn>
            </v-col>
          </v-row>

          <p>Tareas : 0</p>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { getTodoListApi, updateTodoListApi, deleteTodoListApi } from '../services/todoList/index.js';

export default {
    name: 'Task',

    data() {
        return {
            apiTodoList: [],
        }
    },
    methods: {
        getTodoList(){
            getTodoListApi().then(todoList => {
                this.apiTodoList = todoList;
                console.log(this.apiTodoList);
            })
        },
        changeTodoList(item){
            updateTodoListApi({_id: item._id, isComplete: item.isComplete});
            console.log(item);
        },
	deleteTodoList(id){
	    //deleteTodoListApi();
	    console.log(id);
	}
    },
    beforeMount() {
        this.getTodoList();
    }
};
</script>

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
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Task',

  components: {
    //,
  },
};
</script>

<template>
    <v-app-bar app color="#80bc00" dark>
      <v-container class="d-flex align-center justify-space-between">
        <v-img
          src="https://www.cajamorelia.com.mx/images/logo_caja_2023.png"
          alt="Logo"
          width="120"
          contain
        ></v-img>
  
        <v-tabs background-color="transparent" grow dark class="text-white">
          <v-tab to="/" class="text-white">Inicio</v-tab>
          <v-tab to="/blog" class="text-white">Blog</v-tab>
          <v-tab to="/nosotros" class="text-white">Nosotros</v-tab>
          <v-tab to="/contacto" class="text-white">Contacto</v-tab>
        </v-tabs>
      </v-container>
    </v-app-bar>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .v-tab {
    font-weight: 500;
    font-size: 16px;
    background-color: #80bc00;
    color: white !important;
    border-radius: 4px;
    margin: 0 4px;
    transition: background-color 0.3s ease;
  }
  
  .v-tab:hover {
    background-color: #6ea000;
  }
  </style>
  
<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Dillinger-Vue</b-nav-item>
        <b-nav-item-dropdown text="Settings" right>
          <b-dropdown-item to="#">Auto Save</b-dropdown-item>
          <b-dropdown-item to="#">Scroll Sync</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
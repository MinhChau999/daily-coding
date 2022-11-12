<template>
    <div class="topnav shadow-sm">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                <div class="collapse navbar-collapse active" id="topnav-menu-content">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link 
                                class="nav-link" 
                                :to="{name: 'home'}"
                                id="topnav-dashboards" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                <i class="uil-home mr-1"></i>
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link 
                                class="nav-link dropdown-toggle arrow-none" 
                                to="" id="topnav-apps" 
                                role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            >
                                <i class="uil-window mr-1"></i>
                                Daily Code 
                                <div class="arrow-down"></div>
                            </router-link>
                            <div class="dropdown-menu" aria-labelledby="topnav-apps" >
                                <div v-for="(challenge, index) in challenges" :key="index" >
                                    <router-link
                                        :to="{name: 'day', params: {id: challenge.id}}"
                                        class="dropdown-item"> Day {{challenge.id}}
                                    </router-link>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavbarDaily',
  props: {
    challenges: {
        type: Array,
    }
  },

  data() {
    return {
    };
  },

  methods: {
  },
}
</script>

<style>
</style>
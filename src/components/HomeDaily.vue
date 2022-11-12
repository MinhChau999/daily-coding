<template>
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Home</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 

        <!-- end row-->
        <div class="row">
            <div class="col-md-6 col-xl-3"  v-for="(challenge, index) in challenges" :key="index">
                <div class="card d-block">
                    <div class="card-body">
                        <div class="dropdown card-widgets">
                            <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                                <i class="dripicons-dots-3"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" style="">
                                <!-- item-->
                                <router-link 
                                    :to="{name: 'day', params: {id: challenge.id}}" 
                                    class="dropdown-item"
                                >
                                    <i class="mdi mdi-eye mr-1"></i>
                                    View
                                </router-link>
                                <!-- <a href="javascript:void(0);" class="dropdown-item"><i class="mdi mdi-exit-to-app mr-1"></i>Leave</a> -->
                            </div>
                        </div>
                        <!-- project title-->
                        <h4 class="mt-0">
                            <router-link 
                                :to="{name: 'day', params: {id: challenge.id}}"
                                class="text-title">
                                Day {{challenge.id}}: {{challenge.title}} {{challenge.author}}
                            </router-link>
                        </h4>

                        <p class="text-muted font-13 mb-1" style="min-height: 150px;">
                            {{challenge.content}}
                        </p>

                    </div> <!-- end card-body-->
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item p-3">
                            <!-- project progress-->
                            <p class="mb-2 font-weight-bold" 
                                :class="{
                                    'text-success': challenge.process === 100,
                                    'text-warning': challenge.process != 100,}
                                "
                            >
                                <i class="dripicons-checkmark mr-1"></i> 
                                Progress 
                                <span class="float-right">
                                    {{challenge.process}}%
                                </span>
                            </p>
                            <div class="progress progress-sm">
                                <div class="progress-bar" role="progressbar" 
                                    aria-valuenow="100" aria-valuemin="0" 
                                    aria-valuemax="100" 
                                    :style="{width: challenge.process + '%'}
                                ">
                                </div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </li>
                    </ul>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <router-link 
                                :to="{name: 'day', params: {id: challenge.id}}">
                                <button class="btn btn-primary mb-2 font-weight-bold float-right"> View </button>
                            </router-link>
                        </li>
                    </ul>
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row-->

    </div>
</template>

<script>
export default {
   name: 'HomeDaily',
   props: {
    challenges: {
        type: Object,
    }
  },
}
</script>

<style>
</style>
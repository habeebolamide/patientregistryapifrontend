<template>
    <div class="main-content">
        <!-- <breadcumb :page="'Pricing Table'" :folder="'App'" /> -->
        <VueElementLoading
        :active="loading"
        :text="loading_text"
        spinner="line-scale"
        color="var(--primary)"
        />
        <b-row>
            <b-col md="12" xl="12" lg="12">
                <b-card header-bg-variant="transparent" class="mb-30" header="Groups">
                    <div class="table-responsive">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Disease</th>
                                    <th>View Messages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(g, index) in groups" :key="index">
                                    <th>{{ index+1 }}</th>
                                    <th>{{ g.name }}</th>
                                    <th>{{ g.disease.name }}</th>
                                    <th><button class="btn btn-success btn-sm" @click="ViewMessages(g)" >View Messages</button></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card>

                <!-- Pagination controls -->
                <b-pagination v-model="currentPage" :total-rows="groupCount" :per-page="perPage"
                    @change="getGroups"></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "SignIn",
    },
    components:{
        VueElementLoading
    },
    data() {
        return {
            groups: {},
            loading: false,
            auth_token: {},
            currentPage: 1,
            perPage: 10, // Change this to the number of groups per page you want to display
            groupCount: '',
        };
    },

    methods: {
        
        getGroups() {
            this.loading = true
            this.loading_text = 'Fetching Group'
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.auth_token.replace(/"/g, '')}`,
                },
                params: {
                    page: this.currentPage,
                    perPage: this.perPage,
                },
            };
            this.$http.get(this.dynamic_route('/group/patientgroup',config))
            .then((res) => {
                this.groups = res.data.data.groups;
                this.perPage = res.data.data.perPage;
                this.groupCount = res.data.data.groupCount;
            })
            .finally(() => {
                this.loading = false
                this.loading_text = ''
            })
        },

        ViewMessages(group){

            this.$router.push({ path: `/app/pages/${group._id}/message`, query: group });
        }

    },

    mounted() {
        this.getGroups()
    },
    created(){
        this.auth_token = localStorage.getItem('auth_token')
    }
};
</script>
<template>
    <div class="main-content">
        <!-- <breadcumb :page="'Pricing Table'" :folder="'App'" /> -->

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
                                    <th>Join Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(g, index) in groups" :key="index">
                                    <th>{{ index+1 }}</th>
                                    <th>{{ g.name }}</th>
                                    <th>{{ g.disease.name }}</th>
                                    <th><button class="btn btn-success btn-sm" @click="joinGroup(g._id)">Join group</button></th>
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

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "SignIn",
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

            this.$http.get(this.dynamic_route('/group/all'), config).then((res) => {
                this.groups = res.data.data.groups;
                this.perPage = res.data.data.perPage;
                this.groupCount = res.data.data.groupCount;
            });
        },

        joinGroup(id){
            this.$http.post(this.dynamic_route(`/group/${id}/joingroup`))
            .then((res) => {
                this.$toast.success(res.data.message, {
                    timeout: 3000
                });
            })
            .catch((err) => {
                console.log(err);
                this.$toast.error(err.response.data.message, {
                    timeout: 3000
                });
            })
        }

    },

    mounted() {
        this.auth_token = localStorage.getItem('auth_token')
        this.getGroups()
    }
};
</script>
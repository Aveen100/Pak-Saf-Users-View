<template>
  <div>
    <div style="">
      <div
        style="
          height: 100px;
          width: 100px;
          border-radius: 35px;
          border-bottom-left-radius: 0px;
          border-top-left-radius: 35px;
          border-bottom-right-radius: 0px;
          justify-content: center;
          align-items: center;
          display: flex;
        "
        class="d-none green pa-4"
      >
        <!-- <div>
                   <v-btn v-if="sw==1" @click="sw=1" large   style="text-transform:none" rounded elevation="0" class="green mr-1 lighten-5 font-7 weight-600"><v-icon color="green" size="18">mdi-airplane-takeoff</v-icon>Flight</v-btn>
                   <v-btn v-else large @click="sw=1"  text  style="text-transform:none"  rounded elevation="0" color="black" class=" font-7 weight-600"><v-icon color="green" size="18">mdi-airplane-takeoff</v-icon>Flight</v-btn>
               </div>
              <div>
                   <v-btn v-if="sw==2" @click="sw=2" large  color="green lighten-5"  style="text-transform:none" rounded elevation="0" class="font-7 weight-600"><v-icon color="green" size="18">mdi-home</v-icon>Flight</v-btn>
                   <v-btn v-else @click="sw=2" large text color="black"  style="text-transform:none" rounded elevation="0" class="font-7 weight-600"><v-icon color="green" size="18">mdi-home</v-icon>Flight</v-btn>
              </div> -->
      </div>
      <!-- container for flight and hotel components -->
      <v-row
        align="end"
        justify="center"
        class="ml-16 pa-4 white search-container"
        no-gutters
      >
        <!-- <div class="pa-6 mr-4" style="width:30%;border:1px solid grey;border-radius:35px;height:140px;display:flex;justify-content:center;align-items:center;">
                    <div style="flex:2;">
                        <br>
                        <p class="font-7 mb-n1">Living from</p>
                        <p class="font-7 mb-n1 weight-600">Dubai</p>
                        <v-text-field value="Dubai" color="white" background-color="" class="ml-n3 mb-n1 weight-600 font-7"  solo dense flat></v-text-field>
                    </div>
                    <div style="flex:1">
                        <v-avatar size="26" style="border:2px dotted grey">
                            <v-icon size="16">mdi-airplane</v-icon>
                        </v-avatar>
                    </div>
                     <div style="flex:2;">
                         <br>
                        <p class="font-7 mb-n1">Going to</p>
                        <p class="font-7 mb-n1 weight-600">Dubai</p>
                        <v-text-field value="New York" color="white" background-color="white" class="ml-n3 mb-n1 weight-600 font-7"  solo dense flat></v-text-field>
                    </div>
                </div> -->
        <div
          class="green pa-6 mr-4"
          style="
            width: 40%;
            border: 10px solid black;
            border-radius: 35px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p class="white--text">
            User's Balance :
            <strong>
              {{ LoggedInUser.Balance ? LoggedInUser.Balance : 0 }}</strong
            >
            PKR
            <v-btn
              x-small
              class="green--text"
              @click="WithdrawRequest"
              :disabled="IsWithdrawalPending || !LoggedInUser.Balance"
              ><v-icon x-small>mdi-cash-refund</v-icon>Withdraw</v-btn
            >
          </p>
        </div>
        <div
          class="green pa-6 mr-4"
          style="
            width: 40%;
            border: 10px solid black;
            border-radius: 35px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p class="white--text">
            Thank you for choosing Pak Saf for your waste pickup needs. Now,
            let's proceed to select the location for your garbage pickup order.
          </p>
          <!-- <div style="flex:2;">
                        <br>
                        <p class="font-7 mb-n1">Leave <v-icon color="green">mdi-airplane-takeoff</v-icon></p>
                        <p class="font-7 mb-n1 weight-600">Dubai</p>
                        <v-text-field value="23 Jan, Sat" color="white" background-color="white" class="ml-n3 mb-n1 weight-600 font-7"  solo dense flat></v-text-field>
                    </div>
                    <div style="flex:1">
                        <v-avatar size="26" style="border:2px dotted grey">
                            <v-icon size="16">mdi-calendar-multiselect</v-icon>
                        </v-avatar>
                    </div>
                     <div style="flex:2;">
                         <br>
                        <p class="font-7 mb-n1">Return <v-icon color="green">mdi-airplane-landing</v-icon></p>
                        <p class="font-7 mb-n1 weight-600">Dubai</p>
                        <v-text-field value="14 Jan, Thu" color="white" background-color="white" class="ml-n3 mb-n1 weight-600 font-7"  solo dense flat></v-text-field>
                    </div> -->
        </div>
        <v-btn
          @click="OpenLocationPopup"
          elevation="10"
          small
          style="height: 140px; width: 140px; border-radius: 50%"
          color="green"
          dark
          ><v-icon size="35">mdi-pin</v-icon>
          Book Rider
        </v-btn>
      </v-row>
    </div>
    <v-row justify="center" v-if="!OrderPending">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Enter Pickup Location</span>
          </v-card-title>
          <v-card-text>
            <div style="height: 400px">
              <Leaflet @SelecetedLocation="GetSelectedLocation" />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"> Close </v-btn>
            <v-btn text @click="Save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row v-if="OrderPending">
      <v-dialog v-model="ShowPendingDialog" max-width="500px">
        <v-card>
          <v-card-title class="headline"> Order Status </v-card-title>
          <v-card-text>
            <div class="status-content">
              <v-icon color="orange" class="mr-2">mdi-clock</v-icon>
              <span>Your order is currently pending.</span>
            </div>
            <div class="queue-content mt-3">
              <v-icon color="blue" class="mr-2"
                >mdi-format-list-bulleted</v-icon
              >
              <span>Order is in the queue.</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat
              @click="ShowPendingDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row v-if="OrderInProcess">
      <v-dialog v-model="ShowInProcessDialog" max-width="500px">
        <v-card>
          <v-card-title class="headline"> Rider Status </v-card-title>
          <v-card-text>
            <div class="status-content">
              <v-icon color="green" class="mr-2">mdi-bike</v-icon>
              <span>Your rider is on the way.</span>
            </div>
            <div class="rider-info mt-3">
              <div class="info-item">
                <v-icon color="blue" class="mr-2">mdi-account</v-icon>
                <span>{{ RiderDetails.Name }}</span>
              </div>
              <div class="info-item mt-2">
                <v-icon color="blue" class="mr-2">mdi-phone</v-icon>
                <span>{{ RiderDetails.Phone }}</span>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="green darken-1"
              @click="ShowInProcessDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-snackbar v-model="ShowSnackbar">
      {{ SnackbarTitle }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="color"
          top
          small
          v-bind="attrs"
          @click="ShowSnackbar = false"
          flat
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Leaflet from "./LeafletMap.vue";
import axios from "axios";

export default {
  data() {
    return {
      sw: 1,
      dialog: false,
      ShowPendingDialog: false,
      OrderPending: false,
      OrderInProcess: false,
      ShowInProcessDialog: false,
      UserLocation: [],
      ShowSnackbar: false,
      SnackbarTitle: "",
      color: "",
      RiderDetails: {},
      LoggedInUser: {},
      IsWithdrawalPending: false,
    };
  },
  components: {
    Leaflet,
  },
  async mounted() {
    await this.CheckInProcessOrders();
    await this.GetAllRiders();
    this.LoggedInUser = JSON.parse(localStorage.getItem("User"));
    await this.GetUserDetail();
    await this.GetAllWithdrawals();
  },
  methods: {
    async CheckInProcessOrders() {
      try {
        let User = JSON.parse(localStorage.getItem("User"));
        let res = await axios.get(
          `http://localhost:3000/api/total-orders/FetchOrders`
        );
        let TotalOrders = res.data;
        this.OrderPending = TotalOrders.some((el) => {
          return el.UserId == User.id && el.OrderStatus == 1;
        });
        this.OrderInProcess = TotalOrders.some((el) => {
          return el.UserId == User.id && el.OrderStatus == 2;
        });
        this.RiderDetails = TotalOrders.find((el) => {
          return el.UserId == User.id && el.OrderStatus == 2;
        });
      } catch (error) {
        console.error(error);
      }
    },
    OpenLocationPopup() {
      if (this.OrderPending) {
        this.ShowPendingDialog = true;
      } else if (this.OrderInProcess) {
        this.ShowInProcessDialog = true;
      } else {
        this.dialog = true;
      }
    },
    GetSelectedLocation(location) {
      this.UserLocation = location;
    },
    async Save() {
      let User = JSON.parse(localStorage.getItem("User"));
      let obj = {
        Location: this.UserLocation,
        UserId: User.id,
        Name: User.Username,
        Email: User.Email,
        OrderStatus: 1,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/total-orders/createorder",
          obj
        );
        if (response.data.code == 200) {
          this.dialog = false;
          this.ShowSnackbar = true;
          this.SnackbarTitle = "Order Placed Successfully";
          this.color = "green";
          await this.CheckInProcessOrders();
        }
      } catch (e) {
        this.ShowSnackbar = true;
        this.SnackbarTitle = "Order Already Placed";
        this.color = "red";

        console.log(e);
      }
    },
    async GetAllRiders() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/riders/FetchRiders"
        );
        let RidersList = response.data;

        if (this.RiderDetails) {
          this.RiderDetails = RidersList.find((element) => {
            return element.id == this.RiderDetails.RiderId;
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
    async GetUserDetail() {
      try {
        let res = await axios.get(
          `http://localhost:3000/api/user/GetUser/${this.LoggedInUser.id}`
        );
        if (res.data.code == 200) {
          this.LoggedInUser = res.data.user;
        }
      } catch (e) {
        console.error(e);
      }
    },

    async WithdrawRequest() {
      try {
        let body = {
          UserId: this.LoggedInUser.id,
          Name: this.LoggedInUser.Username,
          Email: this.LoggedInUser.Email,
          Phone: this.LoggedInUser.Phone,
          Price: this.LoggedInUser.Balance,
          Status: 1,
        };
        let res = await axios.post(
          `http://localhost:3000/api/withdraws/createWithdraw`,
          body
        );
        if (res.data.code == 200) {
          this.ShowSnackbar = true;
          this.SnackbarTitle = "Withdrawal Request Created Successfully";
          await this.GetAllWithdrawals();
        }
      } catch (e) {
        console.error(e);
      }
    },
    async GetAllWithdrawals() {
      try {
        let res = await axios.get(
          `http://localhost:3000/api/withdraws/FetchWithdrawals`
        );
        let Withdrawals = res.data;
        this.IsWithdrawalPending = Withdrawals.some((el) => {
          return el.UserId == this.LoggedInUser.id && el.Status == 1;
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.search-container {
  border-radius: 35px;
  height: 200px;
  width: 80%;
  border-top-left-radius: 35px;
}

@media screen and (max-width: 500px) {
  .search-container {
    border-radius: 35px;
    height: 100px;
    width: 90%;
    border-top-left-radius: 35px;
  }
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
.status-content {
  display: flex;
  align-items: center;
}

.queue-content {
  display: flex;
  align-items: center;
}
</style>

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {       
        name :  {
            type : String,
            required : true
        },
        password :  {
            type : String,
            required : true
        },
        email : {
            type :String,
            required: false
        },
        picture : {
            type : String,
            default : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAklJREFUaIHtmE9IFUEcx3+WFCZESYEReTBTEKp36RAEdQgS9OJB/INIgmHQKehQiGZahyKC6hAeRCRvQQdPnsRDEHr0T12kQ4dEeoXYIUxf9f0xrKz73tvZXfc3M4f3hc95P9/Z2dmZISplN2WgDnSDIfAMPAJ94CI4YE8tPIfBHbAE/oXwFQyD41Ysi+QaWKVw8SBZ0GPBNS886tsUT97PK7I4rfrBX41gFF6bFudcBn8SyBaj16T8QdJ/rHH5CU6YKtCZsrzHY1MFZoUKfCP1dkVzlNKd+0EuSRe4IijP3JYuIDX/PZ5IF7gpXOC5dIFW4QKD0gXOCxfokC5QDn4IyfO2pEa6AGdcqMC8CXlOhtLZxAXpMlWAM5my/AIZ3lZXgS8pyW+CRpPyXvih6zFlg/wGN0yL+1MPPlEyeS5/1bxyfirBU1KjGUU8B96CahuyYWGhB6SWwy3aK70DlkkVbbAlGBY+TTWDATAB5sB3UuIb4COYAiOgDZyxYhnISXCXlByLxpn//B9ZIVWo1rT4afCGos/5KN/Ee1L7LNHwcY9H/FdK4kH4fukFOCIhfwzMCIkHWQRn05Q/RWoFMSHv/0dk0pDnkV80LO8vcW4/8nxVPm1J3oPffOJv4pZleY+XSeT5/j7rgDzDq1PsJfahA+J+3sWRPwTWHJAOvoXI5+UWB4QLcT9qgTEHZAvxIWqBzw7IFoIvlSt08nw4yTkgWwzt7fUFByTD0F69NDkgGcY9XYF2ByTDGNUV4Ck07DDXdQVKKSVB/gNt7SiVO5f2DAAAAABJRU5ErkJggg=="
        }
        
    }
);

const record = mongoose.model("User", UserSchema);

module.exports = record;
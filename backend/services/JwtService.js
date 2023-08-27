const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();


// jwt giúp mã hóa và xác thực user
const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, {expiresIn: '30s'}) // {data, key, thời gian hết hạn}

    return access_token
}

const genneralRefreshToken = async (payload) => { // khi accessToken hết hạn RefreshToken sẽ cung cấp một accesstoken mới
    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, {expiresIn: '365d'}) // {data, key, thời gian hết hạn}

    return refresh_token
}

const refreshTokenJWTService = (token) => { // khi accessToken hết hạn RefreshToken sẽ cung cấp một accesstoken mới
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if(err) {
                    resolve({
                        status: 'error',
                        message: 'the authentication'
                    })
                }
                const access_Token = await genneralAccessToken({
                    id: user?.id,
                    isAdmin: user?.isAdmin
                })
                resolve({
                    status: "OK",
                    message: "Success",
                    access_Token
                });
            })
            
            } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    refreshTokenJWTService
}
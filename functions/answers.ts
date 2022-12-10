const URLS = [{
    "name": "School Solver Rules",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/3/",
    "answers": [
        "31_4", "7_2", "6_3", "50_3", "5_3", "48_2", "43_3", "52_2",
        "53_2", "46_3", "274_2",
        "30_4", "275_3", "47_2", "33_1", "2_2", "29_2", "4_4",
        "27_4", "54_3", "1_2", "32_3",
        "231_3", "34_2", "3_2", "214_3", "49_4", "9_1", "8_3"
    ],
    "wrongs": [
        "31_1", "7_1", "6_1", "50_1", "5_1", "48_1", "43_1", "52_1",
        "53_1", "46_1", "274_1",
        "30_1", "275_1", "47_1", "33_2", "2_1", "29_1", "4_1",
        "27_1", "54_1", "1_1", "32_1",
        "231_1", "34_1", "3_1", "214_1", "49_1", "9_2", "8_1"
    ]
}, {
    "name": "Accounting I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/9/",
    "answers": [
        "103_1", "112_3", "98_4", "105_3", "106_4", "107_2",
        "108_1", "109_2", "99_3", "102_4",
        "101_4", "104_2", "96_2", "97_1", "110_2", "111_3"
    ],
    "wrongs": [
        "103_2", "112_1", "98_1", "105_1", "106_1", "107_1",
        "108_2", "109_1", "99_1", "102_1",
        "101_1", "104_1", "96_1", "97_2", "110_1", "111_1"
    ]
}, {
    "name": "Biology I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/13/",
    "answers": [
        "179_2", "212_3", "177_2", "202_2", "191_4", "205_1",
        "204_3", "201_1", "199_1", "181_1",
        "187_3", "190_2", "200_2", "208_3", "195_1", "211_3",
        "189_1", "185_1", "174_1", "180_2",
        "207_1", "173_1", "178_3", "210_1", "203_1", "196_3",
        "197_1", "193_2", "198_1", "206_2",
        "176_2", "209_3", "194_1", "183_3", "182_4", "172_2",
        "192_3", "175_4", "188_3", "213_1",
        "184_3", "186_4"
    ],
    "wrongs": [
        "179_1", "212_1", "177_1", "202_1", "191_1", "205_2",
        "204_1", "201_2", "199_2", "181_2",
        "187_1", "190_1", "200_1", "208_1", "195_2", "211_1",
        "189_2", "185_2", "174_2", "180_1",
        "207_2", "173_2", "178_1", "210_2", "203_2", "196_1",
        "197_2", "193_1", "198_2", "206_1",
        "176_1", "209_1", "194_2", "183_1", "182_1", "172_1",
        "192_1", "175_1", "188_1", "213_2",
        "184_1", "186_1"
    ]
}, {
    "name": "Mathematics I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/12/",
    "answers": [
        "165_2", "160_3", "156_4", "170_3", "161_1", "169_3",
        "154_2", "167_4", "168_3", "171_4",
        "155_4", "164_4", "163_2", "157_1", "159_2", "162_1",
        "158_4"
    ],
    "wrongs": [
        "165_1", "160_1", "156_1", "170_1", "161_2", "169_1",
        "154_1", "167_1", "168_1", "171_1",
        "155_1", "164_1", "163_1", "157_2", "159_1", "162_2",
        "158_1"
    ]
}, {
    "name": "Chemistry I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/11/",
    "answers": [
        "130_3", "131_1", "133_2", "135_1", "152_2", "140_4",
        "132_1", "138_4", "139_1", "151_4",
        "141_2", "150_3", "145_2", "148_2", "149_1", "142_3",
        "134_4", "153_3", "136_3", "137_2",
        "143_1", "147_3", "146_4", "144_3"
    ],
    "wrongs": [
        "130_1", "131_2", "133_1", "135_2", "152_1", "140_1",
        "132_2", "138_1", "139_2", "151_1",
        "141_1", "150_1", "145_1", "148_1", "149_2", "142_1",
        "134_1", "153_1", "136_1", "137_1",
        "143_2", "147_1", "146_1", "144_1"
    ]
}, {
    "name": "Physics I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/7/",
    "answers": [
        "65_3", "64_4", "59_4", "60_4", "66_4", "58_3", "57_4",
        "61_3", "63_1", "62_4"
    ],
    "wrongs": [
        "65_1", "64_1", "59_1", "60_1", "66_1", "58_1", "57_1",
        "61_1", "63_2", "62_1"
    ]
}, {
    "name": "Statistics I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/8/",
    "answers": [
        "67_2", "68_2", "69_3", "71_1", "83_4", "77_1", "93_3",
        "79_3", "74_1", "82_4", "80_4",
        "73_2", "72_3", "85_3", "91_4", "86_4", "89_3", "87_2",
        "92_2", "90_3", "81_2", "84_1",
        "70_2", "76_3", "88_1", "78_2", "95_2", "75_4", "94_1"
    ],
    "wrongs": [
        "67_1", "68_1", "69_1", "71_2", "83_1", "77_2", "93_1",
        "79_1", "74_2", "82_1", "80_1",
        "73_1", "72_1", "85_1", "91_1", "86_1", "89_1", "87_1",
        "92_1", "90_1", "81_1", "84_2",
        "70_1", "76_1", "88_2", "78_1", "95_1", "75_1", "94_2"
    ]
}, {
    "name": "Advanced English I",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/15/",
    "answers": [
        "256_1", "219_2", "218_2", "221_4", "216_2", "222_3",
        "228_1", "220_1", "225_2", "215_2",
        "230_2", "227_4", "217_2", "226_1", "229_4", "223_1",
        "224_2"
    ],
    "wrongs": [
        "256_2", "219_1", "218_1", "221_1", "216_1", "222_1",
        "228_2", "220_2", "225_1", "215_1",
        "230_1", "227_1", "217_1", "226_2", "229_1", "223_2",
        "224_1"
    ]
}, {
    "name": "Basic English",
    "url": "https://www.schoolsolver.com/quizzes/submitquiz/4/",
    "answers": [
        "55_4", "236_1", "238_3", "253_3", "247_2", "13_4", "244_1",
        "23_2", "56_2", "51_4",
        "242_3", "26_4", "44_2", "21_3", "39_2", "248_4", "243_2",
        "42_3", "246_3", "40_2",
        "245_4", "239_4", "241_1", "234_2", "45_2", "250_2"
    ],
    "wrongs": [
        "55_1", "236_2", "238_1", "253_1", "247_1", "13_1", "244_2",
        "23_1", "56_1", "51_1",
        "242_1", "26_1", "44_1", "21_1", "39_1", "248_1", "243_1",
        "42_1", "246_1", "40_1",
        "245_1", "239_1", "241_2", "234_1", "45_1", "250_1"
    ]
}];
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { Cookie, CookieJar } from 'tough-cookie';
import { initializeApp } from "firebase/app";
import { logEvent, getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { Transaction } from 'web3-core';

dotenv.config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHProvider || ""));

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = ref(getDatabase(), "SchoolSolver/Payments");

// makes get requests faster, sort of
onValue(database, e => { });

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));


interface ExpectedResponseData {
    readonly TransactionHash: string,
    readonly id: string,
    readonly QuizzesPercentages: Array<number>;
};

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

    if (event.httpMethod != "POST") {
        return {
            statusCode: 200,
            headers: {
                'content-type': 'text/html; charset=utf-8'
            },
            body: "hey wachu doing here, hmm?? 🤨🤨🤨",
        };
    }

    logEvent(analytics, "user_request", {
        time: Date.now(),
        event: event,
        context: context
    });

    // data validation block
    let data: ExpectedResponseData;
    try {
        if (typeof (event.body) != "string")
            throw TypeError;

        data = JSON.parse(event.body);

        if (!(typeof (data.id) == "string"
            && typeof (data.TransactionHash) == "string"
            && Array.isArray(data.QuizzesPercentages)
        ))
            throw TypeError;

    }
    catch (e: any) {
        console.error({ e });
        return {
            statusCode: 400,
            body: JSON.stringify({
                status: "Fatal error: Server crashed",
                message: "Failed to parse data! Notifing police🚓🚨🚔"
            }),
        };
    }

    let UserID: string,
        QuizzesPercentages: Array<number>,
        CSRFToken: string = "",
        TransactionHash: string = "",
        transaction: Transaction;

    // data verification block
    try {
        UserID = data.id;
        QuizzesPercentages = data.QuizzesPercentages;
        TransactionHash = data.TransactionHash;

        // validate UserID
        try {
            await client.get("https://www.schoolsolver.com/userprofile/" + UserID);
        }
        catch {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    status: "Failed!",
                    message: "Could not verify User ID!"
                })
            };
        }

        // get csrf token
        await client.get("https://www.schoolsolver.com/account/login/?next=/");
        let cookies = await jar.getCookies("https://www.schoolsolver.com");
        for (let i = 0; i < cookies.length; i++)
            if (cookies[i].key == "csrftoken")
                CSRFToken = cookies[i].value;

        if (CSRFToken == "")
            return {
                statusCode: 502,
                body: JSON.stringify({
                    status: "Failed!",
                    message: "Could not get token!"
                })
            };

        // check if transaction was already received
        let snapshot = await get(child(database, "TransactionHashes/" + TransactionHash));
        if (snapshot.exists())
            return {
                statusCode: 402,
                body: JSON.stringify({
                    status: "Failed",
                    message: "Hash has already been redeemed!"
                })
            };

        // check if transaction is valid
        transaction = await web3.eth.getTransaction(TransactionHash);
        if (!transaction)
            return {
                statusCode: 402,
                body: JSON.stringify({
                    status: "Failed!",
                    message: "No such transaction found!"
                })
            };
        // check if merchant received payment
        if (transaction.to != process.env.MerchantWallet)
            return {
                statusCode: 402,
                body: JSON.stringify({
                    status: "Failed!",
                    maessage: "Transaction is not to given address!"
                })
            };

        if (Number(web3.utils.fromWei(transaction.value, "tether")) < Number(process.env.ServicePrice))
            return {
                statusCode: 402,
                body: JSON.stringify({
                    status: "Failed!",
                    message: "Transaction was less than specified fee of $" + process.env.ServicePrice
                })
            };
    }
    catch (e: any) {
        console.error({ e });
        return {
            statusCode: 502,
            body: JSON.stringify({
                status: "Failed",
                message: "something went wrong! ERROR: " + e.name
            })
        };
    }

    let jobs = [];
    for (let i = 0; i < QuizzesPercentages.length; i++) {
        if (i >= URLS.length) break;

        if (typeof (QuizzesPercentages[i]) != "number" || QuizzesPercentages[i] < 0)
            continue;

        let userAnswers = [...URLS[i].wrongs];

        for (let j = 0; j < URLS[i].answers.length; j++) {
            let currPercentage = Math.round((j * 100) / URLS[i].answers.length);

            if (currPercentage >= QuizzesPercentages[i])
                break;

            userAnswers[j] = URLS[i].answers[j];
        }

        let tempJob = new Promise(async (res, rej) => {
            client.post(
                URLS[i].url + UserID,
                {
                    answers: userAnswers
                },
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "Referer": "https://www.schoolsolver.com",
                        "user-agent": "",
                        'Cookie': "sessionid=",
                        "X-CSRFToken": CSRFToken
                    },
                }
            ).then(e => {
                res({
                    QuizName: URLS[i].name,
                    response: {
                        data: e.data
                    }
                });
            }).catch(e => {
                console.log({ e });
                rej({
                    QuizName: URLS[i].name,
                    response: {
                        message: e.message,
                        data: e.response.data
                    }
                });
            });
        });

        jobs.push(tempJob);
    }

    let result = await Promise.allSettled(jobs);

    try {
        await set(child(database, "TransactionHashes/" + TransactionHash), {
            transaction: transaction,
            time: Date.now(),
            UserID: UserID,
            QuizzesPercentages: QuizzesPercentages,
            result: result
        });
    }
    catch (e: any) {
        console.error({ e });
        return {
            statusCode: 502,
            body: JSON.stringify({
                status: "Failed",
                message: "Failed to save data! ERROR: " + e.name
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            status: "Success!",
            message: "Completed Tasks!",
            result: result
        })
    };
};

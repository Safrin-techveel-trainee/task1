 const escalationtimes= [
         {
             "id": "44fa62e4-a5ea-462f-8c05-1d6f2043eadd",
             "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
             "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
             "priority": "HIGH",
             "level": 2,
             "timeLimit": 750
         },
         {
             "id": "9590ddf9-536b-4357-9a3a-6d27f8f51d29",
             "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
             "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
             "priority": "LOW",
             "level": 2,
             "timeLimitRiewer": 660,
             "timeLimitApporver": 660
         }
     ];
let apiData=[
            {
         "id": "44fa62e4-a5ea-462f-8c05-1d6f2043eadd",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 90,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-10T16:23:09.969Z",
         "updatedAt": "2025-05-10T16:30:01.948Z",
         "deletedAt": null
     },
     {
         "id": "2f21da5c-8c9e-4e40-b4a8-175779143857",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:07.695Z",
         "updatedAt": "2025-05-12T14:15:07.695Z",
         "deletedAt": null
     },
     {
         "id": "302029cf-ffb9-45a9-a6f9-50f2497b5db6",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:11.143Z",
         "updatedAt": "2025-05-12T14:15:11.143Z",
         "deletedAt": null
     },
     {
         "id": "4e59c48b-7ecd-4b61-935e-047d15de7920",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:27.833Z",
         "updatedAt": "2025-05-12T14:15:27.833Z",
         "deletedAt": null
     },
     {
         "id": "ef98efff-2ac0-4d7e-b5c0-a3abc3f78fce",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:31.076Z",
         "updatedAt": "2025-05-12T14:15:31.076Z",
         "deletedAt": null
     },
     {
         "id": "05a9a8fc-2579-4273-89f3-53e39f3bdefc",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:34.544Z",
         "updatedAt": "2025-05-12T14:15:34.544Z",
         "deletedAt": null
     },
     {
         "id": "9590ddf9-536b-4357-9a3a-6d27f8f51d29",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:44.917Z",
         "updatedAt": "2025-05-12T14:15:44.917Z",
         "deletedAt": null
     },
     {
         "id": "ac40988b-7505-4c68-bcf2-ce70ab38a3c5",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:47.250Z",
          "updatedAt": "2025-05-12T14:15:44.917Z",
         "deletedAt": null
     },
     {
         "id": "44fa62e4-a5ea-462f-8c05-1d6f2043eadd",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 90,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-10T16:23:09.969Z",
         "updatedAt": "2025-05-10T16:30:01.948Z",
         "deletedAt": null
     },
     {
         "id": "2f21da5c-8c9e-4e40-b4a8-175779143857",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:07.695Z",
         "updatedAt": "2025-05-12T14:15:07.695Z",
         "deletedAt": null
     },
     {
         "id": "302029cf-ffb9-45a9-a6f9-50f2497b5db6",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:11.143Z",
         "updatedAt": "2025-05-12T14:15:11.143Z",
         "deletedAt": null
     },
     {
         "id": "4e59c48b-7ecd-4b61-935e-047d15de7920",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:27.833Z",
         "updatedAt": "2025-05-12T14:15:27.833Z",
         "deletedAt": null
     },
     {
         "id": "ef98efff-2ac0-4d7e-b5c0-a3abc3f78fce",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:31.076Z",
         "updatedAt": "2025-05-12T14:15:31.076Z",
         "deletedAt": null
     },
     {
         "id": "05a9a8fc-2579-4273-89f3-53e39f3bdefc",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:34.544Z",
         "updatedAt": "2025-05-12T14:15:34.544Z",
         "deletedAt": null
     },
     {
         "id": "9590ddf9-536b-4357-9a3a-6d27f8f51d29",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:44.917Z",
         "updatedAt": "2025-05-12T14:15:44.917Z",
         "deletedAt": null
     },
     {
         "id": "ac40988b-7505-4c68-bcf2-ce70ab38a3c5",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:47.250Z",
 "updatedAt": "2025-05-12T14:15:47.250Z",
         "deletedAt": null
     },
     {
         "id": "5f1bd46d-84c7-435f-b023-b729e96942f3",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 1,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "ACTIVE",
         "createdAt": "2025-05-12T14:15:52.409Z",
         "updatedAt": "2025-05-12T14:15:52.409Z",
         "deletedAt": null
     },
     {
         "id": "9d929368-cb81-4d70-934a-21e2256d5f0c",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:16:35.415Z",
         "updatedAt": "2025-05-12T14:16:35.415Z",
         "deletedAt": null
     },
     {
         "id": "0acb231f-d5c8-415e-8b97-09882f19c75a",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:16:39.464Z",
         "updatedAt": "2025-05-12T14:16:39.464Z",
         "deletedAt": null
     },
     {
         "id": "deec49e8-3683-4d25-ad8e-e06495ad0555",
         "channelId": "2030098f-2ceb-41d3-b761-225a0b50c194",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:16:43.455Z",
         "updatedAt": "2025-05-12T14:16:43.455Z",
         "deletedAt": null
     },
     {
         "id": "316f62db-1e19-4be9-aba6-80176c4dd033",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:16:57.694Z",
         "updatedAt": "2025-05-12T14:16:57.694Z",
         "deletedAt": null
     },
     {
         "id": "6423cad6-fb76-4d99-9a08-40438f1c1aac",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:17:00.508Z",
         "updatedAt": "2025-05-12T14:17:00.508Z",
         "deletedAt": null
     },
     {
         "id": "7767f640-8ca3-44f9-af77-880023f20e80",
         "channelId": "31f8a4d5-6153-4958-9ed4-a3c7c12f2d9b",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:17:03.589Z",
         "updatedAt": "2025-05-12T14:17:03.589Z",
         "deletedAt": null
     },
     {
         "id": "ff934a72-c2f3-48f3-8f16-bf7592f7070d",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "LOW",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:17:13.315Z",
         "updatedAt": "2025-05-12T14:17:13.315Z",
         "deletedAt": null
     },
     {
         "id": "24b98b8d-560c-4776-8a88-a077080f40cc",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "MEDIUM",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:17:17.823Z",
         "updatedAt": "2025-05-12T14:17:17.823Z",
         "deletedAt": null
     },
     {
         "id": "4af90249-49c6-4efd-a797-ee84fd6b6f0e",
         "channelId": "832dee84-d13f-4106-8fad-62676ac92419",
         "level": 2,
         "roleId": "448c8302-82cb-4d57-b0a7-6c76efa17514",
         "priority": "HIGH",
         "timeLimit": 60,
         "warningOffset": 40,
         "escalators": [
             "dhananjayan.s.n@doodleblue.in"
         ],
         "status": "IN_ACTIVE",
         "createdAt": "2025-05-12T14:17:25.987Z",
         "updatedAt": "2025-05-12T14:17:25.987Z",
         "deletedAt": null
     }
 ];


const apiDatas= [...apiData];

escalationtimes.forEach(escalation => {
    const { id, channelId, roleId, priority ,level} = escalation;
    const baseEntry = {
        id,
        channelId,
        roleId,
        priority,
        level,
        warningOffset: 40,
        escalators: ["dhananjayan.s.n@doodleblue.in"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null
    };

    if (escalation.timeLimit && escalation.level===1) {
        apiDatas.push({
            ...baseEntry,
            timeLimit: escalation.timeLimit,
            status:'ACTIVE'
        });
    } else if (escalation.timeLimitRiewer && escalation.timeLimitApporver && escalation.level===1 && escalation.level===2) {
        apiDatas.push({
            ...baseEntry,
            timeLimitReviewer: escalation.timeLimitRiewer ,
            timeLimitApprover: escalation.timeLimitApporver,    
            status:'IN ACTIVE'
        });
    } else {
        apiDatas.push({
            ...baseEntry,  
            status:'IN ACTIVE'
        });
    }
});

console.log(apiDatas);
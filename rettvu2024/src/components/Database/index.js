import { useState, createContext, useEffect } from "react";

import { Committees } from "./CommitteeData";
import { TralvelInfor } from "./TravelInfor";
import { travelNoteTable } from "./TravelNotes";
import {ITEMS_LIST_ROOM,SESSION_1,SESSION_2} from "./ProgramData"
import {About_content,About_content_topic,Submission_Guideline,Speakers,About_Important_Date} from "./AboutData"
const DataStore = createContext();

function DataStoreProvider({ children }) {
    const value = {
        Committees,
        ITEMS_LIST_ROOM,
        SESSION_1,
        SESSION_2,

        About_content,
        About_content_topic,
        Submission_Guideline,
        Speakers,
        About_Important_Date,

        TralvelInfor,
        travelNoteTable
    }

    return (
        <DataStore.Provider value={value}>
            {children}
        </DataStore.Provider>
    )
}

export { DataStore, DataStoreProvider };
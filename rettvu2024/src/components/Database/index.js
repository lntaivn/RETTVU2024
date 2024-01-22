import { useState, createContext, useEffect } from "react";

import { Committees } from "./CommitteeData";
import {ITEMS_LIST_ROOM,SESSION_1,SESSION_2} from "./ProgramData"
const DataStore = createContext();

function DataStoreProvider({ children }) {
    const value = {
        Committees,
        ITEMS_LIST_ROOM,
        SESSION_1,
        SESSION_2
    }

    return (
        <DataStore.Provider value={value}>
            {children}
        </DataStore.Provider>
    )
}

export { DataStore, DataStoreProvider };
import { useState, createContext, useEffect } from "react";

const DataStore = createContext();

function DataStoreProvider({ children }) {

    const Committees = [
        {
            title: "Chairman Program Committee:",
            content: [
                "Assoc. Prof. Nguyen Minh Hoa - Rector of Tra Vinh University",
            ],
        },
        {
            title: "Vice Chairman Program Committee:",
            content: [
                "Dr. Vo Phuoc Hung - Dean of School of Engineering and Technology, Tra Vinh University",
                "Dr. Huynh Cong Khoi - Head of Science and Technology Office, Tra Vinh University",
            ],
        },
        {
            title: "Technical Program Chairs:",
            content: [
                "Dr. Pham Quoc Phong - Vice Dean of School of Engineering and Technology, Tra Vinh University",
                "Assoc. Prof. Nguyen Thai Son - Director of Resource Development Institute, Tra Vinh University",
            ],
        },
        {
            title: "Co-Program Chair:",
            content: [
                "Dr. Truong Van Men - Deputy Head of Mechanical Engineering Department;",
                "Dr. Nguyen Nhut Lam - Head of Information Technology;",
                "Dr. Cao Phuong Thao - Head of Electrical - Electronics Department;",
                "Dr. Huynh Van Hiep - Head of Civil Engineering Department;",
            ],
        },
        {
            title: "Technical Program Committee:",
            content: [
                "Prof. Tang-Chieh Liu - FCU, Taiwan;",
                "Prof. Cheng Ching - Hwa - FCU, Taiwan;",
                "Prof. Nguyen Tat Dac - Tra Vinh University;",
                "Prof. Tze-Yee-Ho -  FCU, Taiwan;",
                "Assoc. Prof. Đo Đuc Ton -  Đại học Nazarbayev, Kazakhstan;",
                "Prof. Hsi-Min Chen -  FCU, Taiwan;",
                "Assoc. Prof. Nguyen Hieu Minh - Tra Vinh University;",
                "Assoc. Prof. Tran Van Chinh - Tra Vinh University;",
                "Dr. Brian Dick - VIU, Canada;",
                "Dr. Bui Van Tung - Thai Nguyen University;",
                "Dr. Dang Xuan Trong - Hositco, Viet Nam;",
                "Dr. Hoang Trung Kien - Tra Vinh University;",
                "Dr. Lam Thanh Thep - Tra Vinh University;",
                "Dr. Le Nam Tuan - Tra Vinh University;",
                "Dr. Le Tuong Thanh - Tra Vinh University;",
                "Dr. Ngo Huu Huy - Thai Nguyen University;",
                "Dr. Nguyen Bao An - Tra Vinh University;",
                "Dr. Nguyen Duc Tue - Tra Vinh University;",
                "Dr. Nguyen Khac Huan - Tra Vinh University;",
                "Dr. Nguyen Thanh Tam - Tra Vinh University;",
                "Dr. Nguyen Tran Diem Hạnh - Tra Vinh University;",
                "Dr. Nguyen Tuan Nghia - Tra Vinh University;",
                "Dr. Nguyen Viet Phan - Tra Vinh University;",
                "Dr. Pham Van Hoan - Tra Vinh University;",
                "Dr. Tran Song Toan - Tra Vinh University;",
                "Dr. Tran Van Tan - Tra Vinh University;",
                "Dr. Truong Hoang Linh - Tra Vinh University;",
                "Dr. Truong Van Men - Tra Vinh University;",
                "Dr. Van Huu Hue - Tra Vinh University;",
                "Dr. Van Huu Thinh - Tra Vinh University;",
                "Dr. Vu Quang Hieu - Tra Vinh University;",
                "Dr. Vu Thang - Tra Vinh University;",
                "Dr. Nguyen Duc Binh - Thai Nguyen University;",
                "Dr. Duong Van Hieu - Tien Giang University;",
                "Dr. Nguyen Thanh Tuan - Kien Giang Colleges;",
                "Dr. Do Nguyen Duy Phuong - Can Tho University;",
                "Dr. Quach Ngoc Thinh - Can Tho University;",
                "Dr. Nguyen Hoang Vu - Can Tho University;",
                "Dr. Luong Vinh Quoc Danh - Can Tho University;",
                "Dr. Phan Tan Tai - Tra Vinh University;",
            ],
        },
        {
            title: "Secretary:",
            content: [
                "MEng. Dang Hoang Vu - Tra Vinh University;",
                "MEng. Ha Thi Thuy Vi - Tra Vinh University;",
                "MEng. Bui Thi Thu Thuy - Tra Vinh University;",
                "MEng. Huynh Thi My Dung - Tra Vinh University;",
            ],
        },
    ];
    const SESSION_1 = [
        {
            "time": "8:00-8:30:",
            "event": ["Welcome Delegates"]
        },
        {
            "time": "8:30-9:00:",
            "event": [
                "Conference opening",
                "Performances welcome",
                "Opening speech: Assoc. Prof. Dr. Diep Thanh Tung, Vice Rector, Tra Vinh University, Vietnam",
                "Seminar preliminary Dr. Pham Quoc Phong, Vice Dean - School of Engineering and Technology, Tra Vinh University, Vietnam"
            ]
        },
        {
            "time": "9:00-9:50:",
            "event": [
                "<b>Keynote Speech 1: Wind speed estimation and prediction for control, operation, and planning of wind power plants</b>",
                "Speaker: Assoc. Prof. Dr. Do Duc Ton - Nazarbayev University, Kazakhstan",
                "Keynote Session Chairs:",
                "Dr. Pham Van Hoan, Tra Vinh University, Vietnam",
                "Dr. Thach Le Khiem, Tra Vinh University, Vietnam"
            ]
        },
        {
            "time": "9:50-10:40:",
            "event": [
                "<b>Keynote Speech 2: AI in manufacturing</b>",
                "Speaker: Mr. Vo Duy Nhat, Mitsubishi Electric Vietnam Co., LTD",
                "Keynote Session Chairs:",
                "Assoc. Prof. Dr. Do Duc Ton, Nazarbayev University, Kazakhstan",
                "Dr. Thach Le Khiem, Tra Vinh University, Vietnam"
            ]
        },
        {
            "time": "10:40-11:30:",
            "event": [
                "<b>Keynote Speech 3: Refining Programming Education: Integrating Essential Software Engineering Practices</b>",
                "Speaker: Dr. Nguyen Bao An - Tra Vinh University",
                "Keynote Session Chairs:",
                "Assoc. Prof. Dr. Nguyen Thai Son, Director - Resource Development Institute, Tra Vinh University, Vietnam",
                "Dr. Vo Phuoc Hung, Dean - School of Engineering and Technology, Tra Vinh University, Vietnam"
            ]
        },
        {
            "time": "11:30-11:45:",
            "event": ["Group Photo"]
        }
    ]
    
    const SESSION_2 = [
        {
            "time": "12:30-13:00:",
            "event": [
                "Welcome Delegates"
            ]
        },
        {
            "time": "13:00-14:00:",
            "event": [
    
            ]
        }
    ]
    
    const ITEMS_LIST_ROOM = [
        {
            "label_room_sessions": "ROOM 1 (SESSION 1):",
            "label_room_details": "ROOM B21.201",
            "Session_chairs": "Dr. Mai Phuoc Trai, Dr. Truong Van Men",
            "children": [
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                }
            ]
        },
        {
            "label_room_sessions": "ROOM 3 (SESSION 3):",
            "label_room_details": "ROOM B21.203",
            "Session_chairs": "Dr. Vo Phuoc Hung, Dr. Nguyen Duc Binh, Dr. Nguyen Bao An",
            "children": [
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                }
            ]
        },
        {
            "label_room_sessions": "ROOM 4 (SESSION 4):",
            "label_room_details": "ROOM B21.204",
            "Session_chairs": "Dr. Huynh Phuoc Hai, Dr. Nguyen Nhut Lam, Dr. Tran Song Toan",
            "children": [
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                }
            ]
        },
        {
            "label_room_sessions": "ROOM 5 (SESSION 5):",
            "label_room_details": "ROOM B21.205",
            "Session_chairs": "Assoc. Prof. Dr.  Ton Duc Do, Dr. Thach Le Khiem, Dr. Cao Phuong Thao",
            "children": [
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                }
            ]
        },
        {
            "label_room_sessions": "ROOM 6 (SESSION 6):",
            "label_room_details": "ROOM B21.206",
            "Session_chairs": "Dr. Huynh Van Hiep, Dr. Nguyen Xuan Son",
            "children": [
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                },
                {
                    "time": "13:40-14:00:",
                    "paper": 11,
                    "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                    "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                    "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
                }
            ]
        }
    ]
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
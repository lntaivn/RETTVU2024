import { axiosInstance } from "./AxiosCofig";

const getSpeakers = () => {
    return axiosInstance.get(`/speakers`);
};

const getTravelInfo = () => {
    return axiosInstance.get(`/travel_info`);
};

const getSubmissionGuideline = () => {
    return axiosInstance.get(`/submission_guideline`);
};

const getCommittees = () => {
    return axiosInstance.get(`/committees`);
};

const getTopics = () => {
    return axiosInstance.get(`/topics`);
};

const getImportantDate = () => {
    return axiosInstance.get(`/important_date`);
};

const getAboutRet = () => {
    return axiosInstance.get(`/about_ret`);
};

const getContact = () => {
    return axiosInstance.get(`/contact`);
};

const getKey = () => {
    return axiosInstance.get(`/key`);
};

const getRegistration = () => {
    return axiosInstance.get(`/registration`);
};

const getConferenceProgram = () => {
    return axiosInstance.get(`/conference-program`);
};

const getParallelSession1 = () => {
    return axiosInstance.get(`/program-parallel-sessions-1`);
};

const getParallelSession2 = () => {
    return axiosInstance.get(`/program-parallel-sessions-2`);
};

const clearCache = () => {
    return axiosInstance.delete(`/clear`);
};

export {
    getRegistration,
    getSpeakers,
    getTravelInfo,
    getSubmissionGuideline,
    getCommittees,
    getTopics,
    getImportantDate,
    getAboutRet,
    getKey,
    clearCache,
    getContact,
    getConferenceProgram,
    getParallelSession1,
    getParallelSession2
}
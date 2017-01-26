import { nodeList, topicList } from '../config/api';
import fetchData from '../utils/fetch-data';

export const INIT_NODE_LIST = 'INIT_NODE_LIST';

export const GET_TOPIC_LIST = 'GET_TOPIC_LIST';

export const TOPIC_LOADING_STATUS = 'TOPIC_LOADING_STATUS';

export const SET_TOPIC_TYPE = 'SET_TOPIC_TYPE';
/************** action 创建函数 ****************/

export function initNodeList(){
    return function(dispatch){
        fetchData(nodeList()).then((data)=>{
            dispatch({
                type: INIT_NODE_LIST,
                data: data.nodes,
            })
        });
    }
}

export function setTopicLoadingStatus(status){
    return {
        type: TOPIC_LOADING_STATUS,
        data: status,
    }
}

export function setTopicType(type){
    return {
        type: SET_TOPIC_TYPE,
        data: type,
    }
}


export function getTopicList(opt){
    return function(dispatch){
        dispatch(setTopicLoadingStatus(true))
        fetchData(topicList(opt)).then((data)=>{
            dispatch({
                type: GET_TOPIC_LIST,
                data: data.topics
            });
            dispatch(setTopicLoadingStatus(false))
        })
    }
}
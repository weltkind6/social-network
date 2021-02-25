import React from 'react'
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {goFollow, goUnFollow, setCurrentPage, setUsers, toggleIsLoading} from "../../Redux/usersReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
            })
    }

    changePageHandler = pageNumber => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePageHandler={this.changePageHandler}
                users={this.props.users}
                goUnFollow={this.props.goUnFollow}
                goFollow={this.props.goFollow}
            />
        </>


    }
}

const mapStateToProps = state => {
    // хавает весь state целиком и возвращает только те данные, которые нужны
    return {
        users: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps,
    {goFollow, goUnFollow, setUsers, setCurrentPage, toggleIsLoading,}
)(UsersContainer)




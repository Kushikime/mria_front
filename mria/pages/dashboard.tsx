import styles from  '../scss/dashboard/Dashboard.module.scss';

interface IDashboardProps {

}


const Dashboard = (props: IDashboardProps) => {

    return (
        <div className={styles.dashboard}>
            <h1>
                Dashboard page
            </h1>
        </div>
    )
}

export default Dashboard;
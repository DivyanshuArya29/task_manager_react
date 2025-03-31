
const employees = [
    {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile sales data and generate the monthly performance report.",
          "taskDate": "2025-02-15",
          "category": "Reports",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Discuss project updates with the client.",
          "taskDate": "2025-02-16",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update CRM Data",
          "taskDescription": "Ensure all client details are up to date in the CRM system.",
          "taskDate": "2025-02-14",
          "category": "Data Management",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review pull requests and provide feedback.",
          "taskDate": "2025-02-13",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write Test Cases",
          "taskDescription": "Create unit tests for the new module.",
          "taskDate": "2025-02-14",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Fix Bugs",
          "taskDescription": "Resolve reported bugs in the dashboard.",
          "taskDate": "2025-02-16",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Rahul",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Schedule Social Media Posts",
          "taskDescription": "Plan and schedule content for the upcoming week.",
          "taskDate": "2025-02-12",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Run Ad Campaign",
          "taskDescription": "Set up and monitor the new Facebook Ads campaign.",
          "taskDate": "2025-02-15",
          "category": "Advertising",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Neha",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Prepare Training Material",
          "taskDescription": "Create slides and documentation for the onboarding session.",
          "taskDate": "2025-02-18",
          "category": "Training",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Conduct Team Meeting",
          "taskDescription": "Discuss progress and roadblocks with the team.",
          "taskDate": "2025-02-17",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Process Payroll",
          "taskDescription": "Ensure all employee salaries are processed on time.",
          "taskDate": "2025-02-20",
          "category": "Finance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Arjun",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Review stock levels and report shortages.",
          "taskDate": "2025-02-19",
          "category": "Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Supplier Meeting",
          "taskDescription": "Negotiate pricing and discuss upcoming shipments.",
          "taskDate": "2025-02-21",
          "category": "Procurement",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];

const admin = [{
    "id": 100,
    "email": "admin@me.com",
    "password": "123"
}];


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return {employees,admin}
}
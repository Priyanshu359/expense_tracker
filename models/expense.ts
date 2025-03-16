import sequelize from "../config/database";
import { DataTypes, Model } from "sequelize";
import Category from "./category";
import User from "./user";

class Expense extends Model {
    public id!: number;
    public amount!: number;
    public userId!: number;
    public categoryId!: number;
    public description!: string;
    public date!: Date;
}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'id',
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        tableName: 'expenses',
    }
);

User.hasMany(Expense, {
    foreignKey: 'userId',
});

Expense.belongsTo(User, {
    foreignKey: 'userId',
});

Category.hasMany(Expense, {
    foreignKey: 'categoryId',
});

Expense.belongsTo(Category, {
    foreignKey: 'categoryId',
});

export default Expense;
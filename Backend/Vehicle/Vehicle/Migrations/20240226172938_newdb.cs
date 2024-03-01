using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vehicle.Migrations
{
    public partial class newdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "custEmail",
                table: "Vehis",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "vehicleNo",
                table: "Vehis",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "vehicleStatus",
                table: "Vehis",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "userCPassword",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "custEmail",
                table: "Vehis");

            migrationBuilder.DropColumn(
                name: "vehicleNo",
                table: "Vehis");

            migrationBuilder.DropColumn(
                name: "vehicleStatus",
                table: "Vehis");

            migrationBuilder.DropColumn(
                name: "userCPassword",
                table: "Users");
        }
    }
}

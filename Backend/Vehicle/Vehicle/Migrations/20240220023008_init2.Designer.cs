﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Vehicle.DataLayer;

#nullable disable

namespace Vehicle.Migrations
{
    [DbContext(typeof(DBVehicleContext))]
    [Migration("20240220023008_init2")]
    partial class init2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Vehicle.Models.Vehi", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("custCity")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("custName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("custPhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vehicleBrand")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vehicleType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vehicleYear")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Vehi");
                });
#pragma warning restore 612, 618
        }
    }
}

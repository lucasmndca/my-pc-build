package com.lucasmndca.mypcbuild.entities;

import javax.persistence.*;

@Entity
public class Psu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String name;

    @Column
    private Integer wattage;

    @Column
    private Float price;

    public Psu() {}

    public Psu(String name, Integer wattage, Float price) {
        this.name = name;
        this.wattage = wattage;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWattage() {
        return wattage;
    }

    public void setWattage(Integer wattage) {
        this.wattage = wattage;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}

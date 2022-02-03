package com.lucasmndca.mypcbuild.entities;

import javax.persistence.*;

@Entity
public class Cpu {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column
    private String name;

    @Column
    private Float clock;

    @Column
    private Integer cores;

    @Column
    private Integer threads;

    @Column
    private Float price;

    public Cpu() {
    }

    public Cpu(String name, Float clock, Integer cores, Integer threads, Float price) {
        this.name = name;
        this.clock = clock;
        this.cores = cores;
        this.threads = threads;
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

    public Float getClock() {
        return clock;
    }

    public void setClock(Float clock) {
        this.clock = clock;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getCores() {
        return cores;
    }

    public void setCores(Integer cores) {
        this.cores = cores;
    }

    public Integer getThreads() {
        return threads;
    }

    public void setThreads(Integer threads) {
        this.threads = threads;
    }
}

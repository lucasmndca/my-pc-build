package com.lucasmndca.mypcbuild.requests;

public class CpuRequest extends BaseRequest {
    private String name;
    private Float clock;
    private Integer cores;
    private Integer threads;

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

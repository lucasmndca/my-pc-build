package com.lucasmndca.mypcbuild.requests;

public class PsuRequest extends BaseRequest {
    private String name;
    private Integer wattage;

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
}

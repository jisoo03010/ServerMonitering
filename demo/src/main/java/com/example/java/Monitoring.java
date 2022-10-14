package com.example.java;


public class Monitoring {

    public static void main(String[] args)  {

   /**     try{
            OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean.class);

            while(true){
                System.out.println("***********************************************************");
                
                // CPU사용률
                System.out.println("CPU Usage : " + String.format("%.2f", osBean.getSystemCpuLoad() * 100)); 
                
                // 메모리 잔여량
                System.out.println("Memory Free Space : " + String.format("%.2f", (double)osBean.getFreePhysicalMemorySize()/1024/1024/1024  )); 
                
                // 전체 물리 메모리량 
                System.out.println("Memory Total Space : " + String.format("%.2f", (double)osBean.getTotalPhysicalMemorySize()/1024/1024/1024  )); 

                Thread.sleep(1000);
            }

        }catch (Exception e){
            System.out.println(e.toString());
        }**/
    }

}